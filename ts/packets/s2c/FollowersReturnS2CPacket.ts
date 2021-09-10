import { S2CPacket } from "../S2CPacket";


export class FollowersReturnS2CPacket extends S2CPacket {
	readonly FollowersReturnS2CPacketType:null = null;
	myId: string;
	followerUserIds:string[];
    
	constructor(myId:string,followerUserIds:string[]) {
	    super()
	    this.myId = myId
	    this.followerUserIds = followerUserIds
	}
}

export function htmlF(packet:FollowersReturnS2CPacket):{element:Element,followerUserIds:string[]}{
	let html:string = ""
	packet.followerUserIds.forEach((userId)=>{
		const a:string =  `
		<div class="followUser" id="_${userId}">
			<img src=".././img/profile.svg" alt="follower" class="followUsericon">
			<p class="followUsername">
				${userId}
			</p>
		</div>
		`;
		html += a
	})
    const tempEl = document.createElement('li');
    tempEl.innerHTML = html;
    return { element:tempEl!!.firstElementChild!! , followerUserIds:packet.followerUserIds  };
}