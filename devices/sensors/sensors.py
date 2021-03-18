import RPi.GPIO as GPIO
import dht11
import time
from service import callApi

# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

def temperature_and_humidity_sensor(pin):
    instance = dht11.DHT11(pin)
    result = instance.read()
    bad_result = 0
    if result.is_valid():
        return result.temperature, result.humidity
    else:
        return bad_result, bad_result

def water_sensor(pin):
	GPIO.setup(pin, GPIO.IN)
	if GPIO.input(pin):
		return False
	else:
		return True

def luminosity_sensor(pin):
	GPIO.setup(pin, GPIO.IN)
	if GPIO.input(pin):
		return False
	else:
		return True

oldTemperature = None
oldHumidity = None
oldWater = None
oldLuminosity = None

while True : 
	temperature, humidity = temperature_and_humidity_sensor(27) 
	water = water_sensor(17)
	luminosity = luminosity_sensor(22)

	print("Temperature: %-3.1f C" % temperature) 
	print("Humidity: %-3.1f %%" % humidity)
	print("Water:", water) 
	print("Luminosity:", luminosity, "\n")
	
	if(oldTemperature != temperature or oldHumidity != humidity or oldWater != water or oldLuminosity != luminosity ):
		callApi({
			'temperature' : temperature, 
			'humidity': humidity,
			'water' : water,
			'luminosity' : luminosity
		})
	
	oldTemperature = temperature
	oldHumidity = humidity
	oldWater = water
	oldLuminosity = luminosity

	time.sleep(2)