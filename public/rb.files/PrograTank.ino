#include<SoftwareSerial.h>

SoftwareSerial btm(A12, A11);
#define g1 A8
#define g2 A9
#define g3 A10

char ctrl;
//Pines  Motores
#define LF1 11
#define LF2 12
#define RF1 9
#define RF2 10
#define LB1 7
#define LB2 8
#define RB1 6
#define RB2 5


void setup() {
  // put your setup code here, to run once:
  pinMode(LF1, OUTPUT);
  pinMode(LF2, OUTPUT);
  pinMode(RF1, OUTPUT);
  pinMode(RF2, OUTPUT);
  pinMode(LB1, OUTPUT);
  pinMode(LB2, OUTPUT);
  pinMode(RB1, OUTPUT);
  pinMode(RB2, OUTPUT);
  pinMode(g1, INPUT);
  pinMode(g2, INPUT);
  pinMode(g3, INPUT);
  Serial.begin(9600);
  while (!Serial) {
    ;
  }
  Serial1.begin(9600);
  Serial2.begin(9600);
  btm.begin(9600);


  Serial.println("Start");
}
void Rforw(int vel){
    analogWrite(LF1, vel);
  analogWrite(LF2, 0);
  analogWrite(RF1, 0);
  analogWrite(RF2, 0);
  analogWrite(LB1, 0);
  analogWrite(LB2, 0);
  analogWrite(RB1, vel);
  analogWrite(RB2, 0);
}

void Lforw(int vel){
    analogWrite(LF1, 0);
  analogWrite(LF2, 0);
  analogWrite(RF1, vel);
  analogWrite(RF2, 0);
  analogWrite(LB1, vel);
  analogWrite(LB2, 0);
  analogWrite(RB1, 0);
  analogWrite(RB2, 0);
}

void RBack(int vel){
    analogWrite(LF1, 0);
  analogWrite(LF2, 0);
  analogWrite(RF2, vel);
  analogWrite(RF1, 0);
  analogWrite(LB2, vel);
  analogWrite(LB1, 0);
  analogWrite(RB1, 0);
  analogWrite(RB2, 0);
}

void LBack(int vel){
    analogWrite(LF2, vel);
  analogWrite(LF1, 0);
  analogWrite(RF1, 0);
  analogWrite(RF2, 0);
  analogWrite(LB1, 0);
  analogWrite(LB2, 0);
  analogWrite(RB2, vel);
  analogWrite(RB1, 0);
}

void forw(int vel) {
  analogWrite(LF1, vel);
  analogWrite(LF2, 0);
  analogWrite(RF1, vel);
  analogWrite(RF2, 0);
  analogWrite(LB1, vel);
  analogWrite(LB2, 0);
  analogWrite(RB1, vel);
  analogWrite(RB2, 0);
}

void back(int vel) {
  analogWrite(LF2, vel);
  analogWrite(LF1, 0);
  analogWrite(RF2, vel);
  analogWrite(RF1, 0);
  analogWrite(LB2, vel);
  analogWrite(LB1, 0);
  analogWrite(RB2, vel);
  analogWrite(RB1, 0);
}

void left(int vel) {
  analogWrite(LF2, vel);
  analogWrite(LF1, 0);
  analogWrite(RF1, vel);
  analogWrite(RF2, 0);
  analogWrite(LB1, vel);
  analogWrite(LB2, 0);
  analogWrite(RB2, vel);
  analogWrite(RB1, 0);
}

void right(int vel) {
  analogWrite(LF1, vel);
  analogWrite(LF2, 0);
  analogWrite(RF2, vel);
  analogWrite(RF1, 0);
  analogWrite(LB2, vel);
  analogWrite(LB1, 0);
  analogWrite(RB1, vel);
  analogWrite(RB2, 0);
}

void turnR(int vel) {
  analogWrite(LF1, vel);
  analogWrite(LF2, 0);
  analogWrite(RF2, vel);
  analogWrite(RF1, 0);
  analogWrite(LB1, vel);
  analogWrite(LB2, 0);
  analogWrite(RB2, vel);
  analogWrite(RB1, 0);
}

void turnL(int vel) {
  analogWrite(LF2, vel);
  analogWrite(LF1, 0);
  analogWrite(RF1, vel);
  analogWrite(RF2, 0);
  analogWrite(LB2, vel);
  analogWrite(LB1, 0);
  analogWrite(RB1, vel);
  analogWrite(RB2, 0);
}

void STOP() {
  analogWrite(LF1, 0);
  analogWrite(LF2, 0);
  analogWrite(RF1, 0);
  analogWrite(RF2, 0);
  analogWrite(LB1, 0);
  analogWrite(LB2, 0);
  analogWrite(RB1, 0);
  analogWrite(RB2, 0);

}

void loop() {
  // put your main code here, to run repeatedly:
 /* if (digitalRead(g1) || digitalRead(g2) || digitalRead(g3)) {
    Serial.print("g3: ");
    Serial.println(analogRead(g3));
    Serial.print("g2: ");
    Serial.println(analogRead(g2));
    Serial.print("g1: ");
    Serial.println(analogRead(g1));
    if (digitalRead(g3) == 1) {
      btm.write('7');
    }
  }*/
  if (Serial1.available() > 0) {
    ctrl = Serial1.read();
    if (ctrl == '1') {
      forw(255);
    }
    if (ctrl == '2') {
      back(255);
    }
    if (ctrl == '3') {
      left(255);
    }
    if (ctrl == '4') {
      right(255);
    }
    if (ctrl == '5') {
      turnR(255);
    }
    if (ctrl == '6') {
      turnL(255);
    }
    if (ctrl == '7') {
      btm.write('7');
    }
    if(ctrl == '8'){
      btm.write('8');
    }
    if (ctrl == '0') {
      STOP();
    }
  }
    if (Serial.available() > 0) {
    ctrl = Serial.read();
    if (ctrl == '1') {
      forw(255);
    }
    if (ctrl == '2') {
      back(255);
    }
    if (ctrl == '3') {
      left(255);
    }
    if (ctrl == '4') {
      right(255);
    }
    if (ctrl == '5') {
      turnR(255);
    }
    if (ctrl == '6') {
      turnL(255);
    }
    if (ctrl == '7') {
      btm.write('7');
    }
    if(ctrl == '8'){
      btm.write('8');
    }
    if(ctrl ==  '9'){
      btm.write('9');
      Rforw(255);
      delay(2500);
      right(255);
      delay(2500);
      RBack(255);
      delay(2500);
      back(255);
      delay(2500);
      LBack(255);
      delay(2500);
      left(255);
      delay(2500);
      Lforw(255);
      delay(2500);
      forw(255);
      delay(2500);
      Rforw(255);
      delay(2500);
      right(255);
      delay(2500);
      left(255);
      delay(2500);
      LBack(255);
      delay(2500);
      back(255);
      delay(2500);
      RBack(255);
      delay(2500);
      right(255);
      delay(2500);
      Rforw(255);
      delay(2500);
      forw(255);
      delay(2500);
      Lforw(255);
      delay(2500);
      left(255);
      delay(1250);
      turnR(255);
      delay(4300);
      turnL(255);
      delay(4300);
      
    }
    if (ctrl == '0') {
      STOP();
    }
  }

}
