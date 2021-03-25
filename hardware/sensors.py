import RPi.GPIO as GPIO
import dht11, time, serial
from service import sendData, linkPotToUser
import json

# initialize Serial
ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
ser.flush()

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

def water_luminosity():
	if ser.in_waiting > 0:
		jsonString = ser.readline().decode('utf-8').rstrip()
		try:
			jsonObject = json.loads(jsonString)
			return jsonObject["water"], jsonObject["lumen"]
		except:
			pass
	return -1, -1

def start_pot():
    pot_id = linkPotToUser({})
    oldTemperature = None
    oldHumidity = None
    oldWater = None
    oldLuminosity = None

    while True : 
            water, luminosity = water_luminosity()

            temperature, humidity = temperature_and_humidity_sensor(27) 

            print("Temperature: %-3.1f C" % temperature) 
            print("Humidity: %-3.1f %%" % humidity)
            print("Water:", water) 
            print("Luminosity:", luminosity, "\n")
            
            if(oldTemperature != temperature or oldHumidity != humidity or oldWater != water or oldLuminosity != luminosity ):
                    sendData(pot_id, [temperature, humidity, water, luminosity])
            
            oldTemperature = temperature
            oldHumidity = humidity
            oldWater = water
            oldLuminosity = luminosity

            time.sleep(10)
