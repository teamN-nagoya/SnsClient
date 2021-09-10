import kuromoji from "kuromoji"

// この builder が辞書やら何やらをみて、形態素解析機を造ってくれるオブジェクトです。ここで辞書があるパスを指定。今回は kuromoji.js 標準の辞書があるディレクトリを指定。
const builderI  = kuromoji.builder({dicPath: '../../node_modules/kuromoji/dict'})

export function translate(input:string,calc:(output:string)=>void) {
    analysis(input,calc)
}

export const logging = (output:string)=>{
    console.log(output)
}

function analysis(original_text:string,calc:(output:string)=>void):void{ //形態素解析をする関数。非同期処理されるので注意。
    builderI.build((err,tokenizer) => {
        if(err) { throw err }
        let tokens = tokenizer.tokenize(original_text) // tokenizer.tokenize に文字列を渡すと、その文を形態素解析してくれます。
        calc(conversion_process(tokens,conversion_type()))
    })
}

function conversion_type():string{ //ここで変換タイプをランダムに選出。
    const type_list:string[] = ["nyan","onee","boon","noja","dakuon","reverse","gorilla","hiragana","katakana"]
    return type_list[Math.floor(Math.random()*type_list.length)]
}
    
function conversion_process(tokens:kuromoji.IpadicFeatures[],type:string):string{　//ランダムで変換タイプを選出し、変換する関数を呼び出す。
    let changed_text:string
    
    switch(type){

        case "provisional":
            return provisional(tokens)
            break
        
        case "reverse":
            return reverse(tokens)
            break

        case "gorilla":
            return gorilla(tokens)
            break

        case "part_of_speech":
            return part_of_speech(tokens)
            break
        
        case "nyan":
            return nyan(tokens)
            break
        
        case "onee":
            return onee(tokens)
            break

        case "noja":
            return noja(tokens)
            break
        
        case "boon":
            return boon(tokens)
            break
            
        case "hiragana":
            return hiragana(tokens)
            break

        case "katakana":
            return katakana(tokens)


        case "dakuon":
            return dakuon(tokens)
            break
        
        case "test":
            return test(tokens)
            break
        
        default:
            return changed_text = "ERROR!!この文章は表示されないはずだよ。"
    }
} 

function provisional(tokens:kuromoji.IpadicFeatures[]):string{
    let change_text:string = ""

    for(let token = 0;token < tokens.length;++token){
        change_text += tokens[token].surface_form
    }

    return change_text
}

function reverse(tokens:any):string{
    let change_text:string = ""

    for(let token = 0;token < tokens.length;++token){
        change_text += tokens[token].surface_form
    }

    return change_text.split("").reverse().join("");
}

function part_of_speech(tokens:any):string{
    let change_text:string = ""


    for(let token = 0;token < tokens.length;++token){
        if(tokens[token].pos == "名詞"){tokens[token].surface_form = "名詞、"}
        else if(tokens[token].pos == "動詞"){tokens[token].surface_form = "動詞、"}
        else if(tokens[token].pos == "形容詞"){tokens[token].surface_form = "形容詞、"}
        else if(tokens[token].pos == "副詞"){tokens[token].surface_form = "副詞、"}
        else if(tokens[token].pos == "連体詞"){tokens[token].surface_form = "連体詞、"}
        else if(tokens[token].pos == "接続詞"){tokens[token].surface_form = "接続詞、"}
        else if(tokens[token].pos == "助詞"){tokens[token].surface_form = "助詞、"}
        else if(tokens[token].pos == "助動詞"){tokens[token].surface_form = "助動詞、"}
        else if(tokens[token].pos == "感動詞"){tokens[token].surface_form = "感動詞、"}
        else if(tokens[token].pos == "記号"){}
        else{tokens[token].surface_form = tokens[token].pos}
        change_text += tokens[token].surface_form

    }
    return　change_text
}

function onee(tokens:any):string{
    let change_text:string = ""
    let launch:boolean = false

    for(let token = 0;token < tokens.length;++token){
        if (launch){
            launch = false
        }
        else if (tokens[token].pos_detail_1 == "終助詞"){
            if (tokens[token - 1].pos_detail_1 == "終助詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form = "ね" 
                }
            }
            else if (tokens[token-1].pos == "動詞" && tokens[token-1].conjugated_form == "未然形"){
                if (tokens[token+1].pos == "助動詞" && tokens[token+1].conjugated_form == "未然形"){
                    if (tokens[token+2].pos_detail_1 == "句点" || tokens[token+2].pos_detail_1 == "空白" || tokens[token+2].pos_detail_1 == "括弧開" || tokens[token+2].pos_detail_1 == "括弧閉" || tokens[token+2].pos_detail_1 == "一般"){
                        tokens[token].surface_form = tokens[token].surface_form = "ない" 
                        tokens[token+1].surface_form =　"でしょ" 
                        launch = true
                    }
                }
            }
            else if (tokens[token-1].pos == "動詞"){

            }
            else if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                tokens[token].surface_form = tokens[token].surface_form = "わよ" 
            }
        }
        else if (tokens[token].pos == "助動詞" && tokens[token].conjugated_form == "基本形"){
            if (tokens[token-1].pos_detail_1 == "接続助詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form = "よ" 
                }
            }
            else if (tokens[token-1].conjugated_form == "未然形"){}
            else if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                tokens[token].surface_form = tokens[token].surface_form + "わよ" 
            }
        }
        else if (tokens[token].pos_detail_1 == "代名詞"){
            if (tokens[token].reading == "アナタ" || tokens[token].reading == "キミ" || tokens[token].reading == "キサマ" || tokens[token].reading == "オマエ" || tokens[token].reading == "ソナタ" || tokens[token].reading == "オマエサン"){
                tokens[token].surface_form = "あんた"
            }
            else if (tokens[token].reading == "キミタチ" || tokens[token].reading == "オマエタチ"){
                tokens[token].surface_form = "あなたたち"
            }
            else if (tokens[token].reading == "オマエラ" || tokens[token].reading == "キサマラ" ||tokens[token].reading == "オマエサンラ"){
                tokens[token].surface_form = "あんたら"
            }
        }
        change_text += tokens[token].surface_form
    }
    return　change_text
}

function nyan(tokens:any):string{
    let change_text:string = ""
    
    for(let token = 0;token < tokens.length;++token){
        if (tokens[token].pos == "動詞"){
            if (tokens[token].conjugated_form == "基本形"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "にゃん" 
                }
            }

        }
        if (tokens[token].pos == "助動詞"|| tokens[token].pos_detail_1 == "終助詞"){
            if (tokens[token-1].pos == "助動詞" || tokens[token-1] == "終助詞"){
                    if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                        tokens[token].surface_form = tokens[token].surface_form + "にゃ" 
                    }
            }
            else if (tokens[token].pos == "助動詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "にゃん" 
                }
            }
            else if (tokens[token].pos_detail_1 == "終助詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form = "にゃ" 
                }
            }
        }
        change_text += tokens[token].surface_form.replace(/な/g , "にゃ")
    }
    return　change_text
}

function noja(tokens:any):string{
    let change_text:string = ""
    
    for(let token = 0;token < tokens.length;++token){
        if (tokens[token].pos == "動詞"){
            if (tokens[token].conjugated_form == "基本形"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "のじゃ"
                }
            }

        }
        if (tokens[token].pos == "助動詞"|| tokens[token].pos_detail_1 == "終助詞"){
            if (tokens[token-1].pos == "助動詞" || tokens[token-1] == "終助詞"){
                    if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                        tokens[token].surface_form = tokens[token].surface_form = "のじゃ" 
                }
            }
            else if (tokens[token].pos == "助動詞" && tokens[token].conjugated_form == "基本形"){

                if (tokens[token].conjugated_type == "特殊・ダ" || tokens[token].conjugated_type == "特殊・ヤ"){
                    if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                        tokens[token].surface_form = tokens[token].surface_form = "じゃ" 
                    }
                }
                else if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "のじゃ" 
                }
            }
            else if (tokens[token].pos_detail_1 == "終助詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form
                }
            }
        }
        change_text += tokens[token].surface_form
    }
    return　change_text
}

function gorilla(tokens:any):string{
    let change_text:string = ""
    
    for(let token = 0;token < tokens.length;++token){
        if (tokens[token].pos == "動詞"){
            if (tokens[token].conjugated_form == "基本形"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "ウホ" 
                }
            }

        }
        if (tokens[token].pos == "助動詞"|| tokens[token].pos_detail_1 == "終助詞"){
            if (tokens[token-1].pos == "助動詞" || tokens[token-1] == "終助詞"){
                    if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                        tokens[token].surface_form = tokens[token].surface_form + "ウホ" 
                    }
            }
            else if (tokens[token].pos == "助動詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "ウホ" 
                }
                }
            else if (tokens[token].pos_detail_1 == "終助詞"){
                if (tokens[token+1].pos_detail_1 == "句点" || tokens[token+1].pos_detail_1 == "空白" || tokens[token+1].pos_detail_1 == "括弧開" || tokens[token+1].pos_detail_1 == "括弧閉" || tokens[token+1].pos_detail_1 == "一般" ){
                    tokens[token].surface_form = tokens[token].surface_form + "ウホ" 
                    }
                }
        }
        change_text += tokens[token].surface_form
    }
    return　change_text
}

function katakana(tokens:any):string{
    let change_text:string = ""
    for (let token = 0; token <tokens.length; ++token){
        if (tokens[token].pos == "記号"){}
        else if(!(tokens[token].reading == undefined)){
            tokens[token].surface_form = tokens[token].reading
        }
        else tokens[token].surface_form = tokens[token].surface_form.replace(/[ぁ-ん]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) + 0x60)})
        change_text += tokens[token].surface_form
    }
    return change_text
}

function hiragana(tokens:any):string{
    let change_text:string = ""
    for (let token = 0; token <tokens.length; ++token){
        if (tokens[token].pos == "記号"){}
        else if(!(tokens[token].reading == undefined)){
            tokens[token].surface_form = tokens[token].reading.replace(/[ァ-ン]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) - 0x60)})
        }
        else tokens[token].surface_form = tokens[token].surface_form.replace(/[ァ-ン]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) - 0x60)})
        change_text += tokens[token].surface_form
    }
    return change_text
}

function dakuon(tokens:any):string{
    let change_text:string = ""
    for (let token = 0; token <tokens.length; ++token){
        if (tokens[token].pos == "記号"){}
        else if(!(tokens[token].reading == undefined)){
            tokens[token].surface_form = tokens[token].reading.normalize('NFD').replace(/[ァ-ン]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) - 0x60)})
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u309B/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u3099/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\uff9e/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u309c/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u309a/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\uff9f/g,'')
        }
        else {
            tokens[token].surface_form = tokens[token].surface_form.normalize('NFD').replace(/[ァ-ン]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) - 0x60)})
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u309B/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u3099/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\uff9e/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u309c/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\u309a/g,'')
            tokens[token].surface_form = tokens[token].surface_form.replace(/\uff9f/g,'')
            
        }
        change_text += tokens[token].surface_form
    }
    return change_text
}

function boon(tokens:any):string{
    const dictionaly:string[][] = [
        ["あ","か","さ","た","な","は","ま","や","ら","わ","が","ざ","だ","ば","ぱ"],
        ["い","き","し","ち","に","ひ","み",     "り",    "ぎ","じ","ぢ","び","ぴ"],
        ["う","く","す","つ","ぬ","ふ","む","ゆ","る","を","ぐ","ず","づ","ぶ","ぷ"],
        ["え","け","せ","て","ね","へ","め",     "れ",    "げ","ぜ","で","べ","ぺ"],
        ["お","こ","そ","と","の","ほ","も","よ","ろ",     "ご","ぞ","ど","ぼ","ぽ"],
        ["ぁ","ゃ"],
        ["ぃ"],
        ["ぅ","っ","ゅ"],
        ["ぇ"],
        ["ぉ","ょ"]]
    let change_text:string = ""

    for (let token = 0; token <tokens.length; ++token){ //辞書に登録されてない名詞は、漢字に変換できません。
        if (tokens[token].pos == "記号"){}
        else if (tokens[token].pos == "名詞" && tokens[token].word_type == "UNKNOWN"){
            tokens[token].surface_form = tokens[token].surface_form.replace(/[ァ-ン]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) - 0x60)})
            for (const a of dictionaly){
                for (const b of a){
                    tokens[token].surface_form = tokens[token].surface_form.replace(new RegExp(b,"g"), a[0])
                }
            }
        }
        else {
            tokens[token].surface_form = tokens[token].reading.replace(/[ァ-ン]/g,function(s:string){return String.fromCharCode(s.charCodeAt(0) - 0x60)})
            for (const a of dictionaly){
                for (const b of a){
                    tokens[token].surface_form = tokens[token].surface_form.replace(new RegExp(b,"g"), a[0])
                }
            }
            
        }
        change_text += tokens[token].surface_form
    }
    return change_text
}

function test(tokens:any):string{
    let change_text:string = ""

    for(let token = 0;token < tokens.length;++token){
        
        console.log(tokens[token])
        // if (!(tokens[token].pos == "連体詞" || tokens[token].pos == "副詞" || tokens[token].pos == "接続詞" || tokens[token].pos == "感動詞" || tokens[token].pos == "助詞" || tokens[token].pos == "名詞"))
        // {
        //     change_text += tokens[token].surface_form
        // }
        if (tokens[token].pos == "助動詞"　|| tokens[token].pos_detail_1 == "終助詞"){
            if (!(tokens[token - 1].pos == "助動詞" || tokens[token-1].pos_detail_1 == "終助詞")){
                if (tokens[token+1].pos == "助動詞" || tokens[token+1].pos_detail_1 == "終助詞"){
                    tokens[token].surface_form = "!" + tokens[token].surface_form
                }
                else  if(!(tokens[token-1].pos == "助動詞" || tokens[token-1].pos_detail_1 == "終助詞")&&(!(tokens[token+1].pos == "助動詞" || tokens[token+1].pos_detail_1 == "終助詞"))){
                    tokens[token].surface_form = "*" + tokens[token].surface_form + "*"
                }
            }
            if (tokens[token-1].pos == "助動詞" || tokens[token-1].pos_detail_1 == "終助詞"){
                    if (!(tokens[token+1].pos == "助動詞" || tokens[token+1].pos_detail_1 == "終助詞")){
                        tokens[token].surface_form = tokens[token].surface_form + "/" 
                    }
            }
        }
        change_text += tokens[token].surface_form
    }
    return　change_text
}