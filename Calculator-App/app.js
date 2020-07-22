var app=angular.module("calculatorApp",[]);

app.controller("calculatorctrl", CalCtrl);

function CalCtrl(){
    this.result=0;

   
    this.button=function(button){
        this.selectedoperation=button;
    }

    this.equals=function(){
        var number1=parseFloat(this.input1);
        var number2=parseFloat(this.input2);

        if(this.selectedoperation ==='+'){
            this.result=number1+number2;
        }
        else if(this.selectedoperation ==='-'){
            this.result=number1-number2;
        }
        else if(this.selectedoperation ==='/'){
            this.result=number1/number2;
        }
        else if(this.selectedoperation ==='*'){
            this.result=number1*number2;
        }
    }
}
