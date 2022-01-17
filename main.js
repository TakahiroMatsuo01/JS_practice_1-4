const getValue = () => {
    const title = '==============================\n現在持っているタスクの一覧\n==============================';
    const addgenre_Array = ['掃除','買い物','散歩'];
    const addtasks_Array = ['机を片付ける','牛乳を買う','散歩する'];
    let request = prompt('「確認、追加、削除、終了」のいずれかを入力してください。');
    let addtask = prompt('タスクを入力してください。');
    let addgenre = prompt('ジャンルを入力してください。');
             console.log(title);
    addtasks_Array.forEach((value,index) => {
                console.log(`${index}`,`[内容]:${value}`,`[ジャンル]${addgenre_Array[index]}`);

    });   
    if(addtask && addgenre){
            console.log(title);
            addtasks_Array.push(addtask);
            addgenre_Array.push(addgenre)
            alert('新しいタスクを追加しました。');
            addtasks_Array.forEach((value,index) => {
                console.log(`${index}`,`[内容]:${value}`,`[ジャンル]${addgenre_Array[index]}`);

    });
　}   
}


getValue();

