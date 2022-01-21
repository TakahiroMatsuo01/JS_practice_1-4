const getValue = () => {
    const title = '==============================\n現在持っているタスクの一覧\n==============================';
    const tasks = [
        {
          title:'机を片付ける',
          genre: '掃除'
        },{
            title:'牛乳を買う',
            genre:'買い物',
        },
        {
            title:'散歩する',
            genre:'散歩'
        }
      ];

    let request = prompt('「確認、追加、削除、終了」のいずれかを入力してください。');
    let addtask = prompt('タスクを入力してください。');
    let addgenre = prompt('ジャンルを入力してください。');
             console.log(title);
    tasks.forEach((value,index) => {
                console.log(`${index}`,`[内容]:${tasks[index].title}`,`[ジャンル]${tasks[index].genre}`);

    });   
    if(addtask && addgenre){
            console.log(title);
            tasks.title.push(addtask);
            tasks.genre.push(addgenre);
            alert('新しいタスクを追加しました。');
            tasks.forEach((value,index) => {
                console.log(`${index}`,`[内容]:${tasks[index].title}`,`[ジャンル]${tasks[index].genre}`);
    });
　}   
}
getValue();

