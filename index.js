

let count = 0;
var result = 0;
var chg2 = 0;
var t = 0;
let op1 = document.querySelector(".a");
let q = document.querySelector(".main");
document.querySelector(".start").addEventListener("click", function () {
  count++;
  q1();
  function q1() {
    q.innerHTML =
      "<br><br><br><p class='question'>1. A program which translates a high-level language program into a machine language program is called ?</</p>" +
      "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary'onClick='q2()'  ;>(A) Compiler</button><span ></div>" +
      "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q2()' >(B) Interpreters</button><span >" +
      " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q1ans' onClick='q2()' >(C) Both (A) and (B)</button><span ></div>" +
      "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q2()' >(D) None of the above</button><span ></div></div>";

    let q1 = document
      .querySelector(".q1ans")
      .addEventListener("click", function () {
        console.log(this.innerHTML);
        if (this.innerHTML == "(C) Both (A) and (B)" && result == 0) {
          result++;
          q2();
          console.log("you are right" + result);
        } else {
          console.log("there was an error");
        }
      });
  }
});
function q2() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>2. A sequence of instructions in a computer language to get the desired result is<p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere' onClick='q3()'>(A) An algorithm</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q3()' >(B) A decision table</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q2ans'onClick='q3()' >(C) A program</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q3()' >(D) None of the above</button><span ></div></div>";

  let q1 = document
    .querySelector(".q2ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(C) A program") {
        result++;
        q3();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q3() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>3. Which type of errors are flagged by Compilers ?<p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere' onClick='q4()' ;>(A) Logical errors</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q2ans' >(B) Syntax errors</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 ' onClick='q4()' >(C) Both (A) and (B)</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q4()' >(D) None of these</button><span ></div></div>";

  let q1 = document
    .querySelector(".q2ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(B) Syntax errors") {
        result++;
        q4();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q4() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>4.An algorithm is best described as _? <p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere' onClick='q5()'>(A) A computer language</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q4ans' >(B) A step by step procedure for solving a problem</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q4ans'onClick='q5()' >(C) A branch of mathematicsbutton<span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q5()' >(D) None of the above   </button><span ></div></div>";

  let q1 = document
    .querySelector(".q4ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (
        this.innerHTML == "(B) A step by step procedure for solving a problem"
      ) {
        result++;
        q5();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q5() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>5. Bug means :  <p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere' onClick='q6()'>(A) A logical error in a program</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q6()' >(B) A difficult syntax error in a program</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q4ans' >(C) Both (A) and (B)</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q6()' >(D) None of the above   </button><span ></div></div>";

  let q1 = document
    .querySelector(".q4ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(C) Both (A) and (B)") {
        result++;
        q6();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q6() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>6. Which of the following is not true about an interpreter?" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere' onClick='q7()'>(A) Interpreter generates an object program from the source program.</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q7()'>(B) Interpreter is a kind of translater</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1' onClick='q7()' >(C) Interpreter analysis each source statement every time it is to be executed.   </button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q7ans' >(D) None of the above</button><span ></div></div>";

  let q1 = document
    .querySelector(".q7ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(D) None of the above") {
        result++;
        q7();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q7() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>7. The part of a machine level instruction which tells the central processor what has to be done ?<p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere q6ans'>(A) An operation code</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q8()' >(B) A difficult syntax error in a program</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1' onClick='q8()' >(C) Both (A) and (B)</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q8()' >(D) None of the above   </button><span ></div></div>";

  let q1 = document
    .querySelector(".q6ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(A) An operation code") {
        result++;
        q8();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q8() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>8. The errors that can be pointed out by the compiler are :<p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere q7ans'>(A) Syntax errors</button></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q9()' >(B) Semantic errors</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1' onClick='q9()' >(C) Logical errors </button></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q9()' >(D) None of the above   </button><span ></div></div>";

  let q1 = document
    .querySelector(".q7ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(A) Syntax errors") {
        result++;
        q9();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q9() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>9. The mapping from assembly language instructions into machine language instructions is<p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere ' onClick='q10()'>(A) Many-one</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q10()' >(B) One-many</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1 q8ans' >(C) One-one</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='q10()' >(D) (D) Many-many </button><span ></div></div>";

  let q1 = document
    .querySelector(".q8ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(C) One-one") {
        result++;
        q10();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}
function q10() {
  q.innerHTML =
    "<br><br><br>" +
    "<p class='question'>10. A program that converts a high level language program to a set of instructions that can run on a computer is called a :<p>" +
    "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary nicere q10ans' >(A) Compiler</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='final()' >(B) Debugger</button><span >" +
    " </div><div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1' onClick='final()' >(C) Editor</button><span ></div>" +
    "<div class='col-lg-6 col-md-6 col-sm-12'><button class='btn btn-outline-primary q1'onClick='final()' >(D) None of the above </button><span ></div></div>";

  let q1 = document
    .querySelector(".q10ans")
    .addEventListener("click", function () {
      console.log(this.innerHTML);
      if (this.innerHTML == "(A) Compiler") {
        result++;
        final();
        console.log("you are right" + result);
      } else {
        console.log("there was an error");
      }
    });
}


function final(){
    q.innerHTML="<h2 class='res'>Your score is"+result+"/10</h2>"+
    "<br><br>"
    if(result<=4){
        var accu=result*100/10;
        q.innerHTML+="<h5 class='ex'>You can do much better :)</h5><br><br><br>"+
        "<button class='btn btn-outline-danger' onClick='end()'>Try Again</button><br><br><br>"+
        "<h2>Your accuracy is "+accu+" %"
    }
    else if(result<=7){
        var accu=result*100/10;
        q.innerHTML+="<br><br><h5 class='ex'> Woah Good :)</h2><br>"+
        "<button class='btn btn-outline-danger' onClick='end()'>Try Again</button><br>"+
        "<h2>Your accuracy is "+accu+" %"+"<br>"
    }

    else{
        var accu=result*100/10;
        q.innerHTML+="<h5 class='ex'> Exellent :)</h2>"+
        "<button class='btn btn-outline-danger' onClick='end()'>Try Again</button>"+
        "<h2>Your accuracy is "+accu+" %"
    }
}
function end(){
    location.reload();
}