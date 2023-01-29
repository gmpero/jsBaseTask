/*
    Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. 
    Пример работы должен быть таким:

    ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
    ladder.up(); 
    ladder.up();
    ladder.showStep(); // 2
    ladder.down();
    ladder.showStep(); // 1
*/

let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      if(this.step === 0){
        this.step = 0;
        console.log("Вы на ступеньке 0");
      }
      else{
        this.step--;
      }
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
    }
  };




//ladder.showStep;
ladder.up();
ladder.down();
ladder.down();

ladder.showStep();