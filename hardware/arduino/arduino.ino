int waterPin = A0;
int lumPin = A1;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(waterPin, INPUT);
  pinMode(lumPin, INPUT);
  //pinMode(waterPinOut, OUTPUT);
  //pinMode(lumPinOut, OUTPUT);
}

void loop() {
  delay(500);
  // put your main code here, to run repeatedly:
  /**Serial.print("WaterLeve : " + analogRead(waterPin));
  Serial.println(analogRead(waterPin));
  Serial.print("Lumen : ");
  Serial.println(analogRead(lumPin));
  Serial.println();

  digitalWrite(waterPinOut, analogRead(waterPin));
  digitalWrite(lumPinOut, analogRead(lumPin));**/

  String json1 = "{\"water\" : ";
  String json2 = json1 + analogRead(waterPin);
  String json3 = json2 + ", \"lumen\" : ";
  String json4 = json3 + analogRead(lumPin);
  Serial.println(json4 + "}");
}
