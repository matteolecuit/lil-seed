import RPi.GPIO as GPIO
import dht11
import time

# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

def temperature_and_humidity_sensor(pin):
    # read data using pin 14
    instance = dht11.DHT11(pin)
    result = instance.read()

    if result.is_valid():
        return result.temperature, result.humidity
    else:
        print("Error: %d" % result.error_code)
        return


def luminosity_sensor(pin):
    GPIO.setup(pin, GPIO.IN)
    lOld = not GPIO.input(pin)
    time.sleep(0.5)
    while True:
        if GPIO.input(pin) != lOld:
            if GPIO.input(pin):
                print(GPIO.HIGH)
        lOld = GPIO.input(pin)
        time.sleep(0.2)

temperature, humidity = temperature_and_humidity_sensor(17)
print("Temperature: %-3.1f C" % temperature)
print("Humidity: %-3.1f %%" % humidity)
luminosity_sensor(22)