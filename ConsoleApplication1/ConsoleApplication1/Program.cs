using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        private static System.IO.Ports.SerialPort serialPort1;
        static void Main(string[] args)
        {


            InitializeSerialPort();

        }
        private static void InitializeSerialPort()
        {
            serialPort1 = new System.IO.Ports.SerialPort();
            serialPort1.PortName = "COM3"; // In my system Arduino is on COM7 port
            serialPort1.BaudRate = 9600;
            serialPort1.Open();
            serialPort1.DataReceived += new System.IO.Ports.SerialDataReceivedEventHandler(serialPort1_DataReceived);
        }
        private static void serialPort1_DataReceived(object sender, System.IO.Ports.SerialDataReceivedEventArgs e)
        {

           string  temperatureReceived = serialPort1.ReadLine();
           Console.WriteLine(temperatureReceived);

        }


    }
}
