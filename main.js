const getValue = () => {
    const title = '==============================\n現在持っているタスクの一覧\n==============================';
    const addgenre_Array = ['掃除','買い物','散歩'];
    const addtasks_Array = ['机を片付ける','牛乳を買う','散歩する'];
    let request = prompt('「確認、追加、削除、終了」のいずれかを入力してください。');
    let addtask = prompt('タスクを入力してください。');
    let addgenre = prompt('ジャンルを入力してください。');
            console.log(title);
    for(let i = 0; i < addtasks_Array.length; i++) {
        console.log(`${i}:[内容]${addtasks_Array[i]}、[ジャンル]${addgenre_Array[i]}`);
　　　}
    
    if(addtask && addgenre){
            console.log(title);
            addtasks_Array.push(addtask);
            addgenre_Array.push(addgenre)
            alert('新しいタスクを追加しました。');
    for(let i = 0; i < addtasks_Array.length; i++) {
            console.log(`${i}:[内容]${addtasks_Array[i]}、[ジャンル]${addgenre_Array[i]}`);
　　}
　}   
}
getValue();

