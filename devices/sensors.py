import RPi.GPIO as GPIO
import dht11
import time

# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()
channel = 17
GPIO.setup(channel, GPIO.IN)

def temperature_and_humidity_sensor(pin):
    # read data using pin 14
    instance = dht11.DHT11(pin)
    result = instance.read()
    bad_result = 0
    if result.is_valid():
        return result.temperature, result.humidity
    else:
        return bad_result, bad_result

def callback():
        if GPIO.input(17):
                print("No water")
        else:
                print("Water")
        time.sleep(1)

def luminosity_sensor(pin):
        GPIO.setup(pin, GPIO.IN)
        lOld = not GPIO.input(pin)
        time.sleep(0.5)
        if GPIO.input(pin) != lOld:
                if GPIO.input(pin):
                        print("No luminosity")
                else:
                        print("luminosity")
                lOld = GPIO.input(pin)
                time.sleep(0.2)

while True :
        temperature, humidity = temperature_and_humidity_sensor(27)
        print("Temperature: %-3.1f C" % temperature)
        print("Humidity: %-3.1f %%" % humidity)
        callback()
        luminosity_sensor(22)
                                                      