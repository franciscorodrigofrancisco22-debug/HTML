using System;
static test{
    static void Main(){

double taxaKz = 916;

        Console.WriteLine("==Conversor de moedas==");
        Console.WriteLine("1-Kuanza(Kz)");
        Console.WriteLine("2-Dolar(USD)");
        Console.Write("Qual moeda deseja converter: ");
        int opcao = int.Parse(Console.Read());

        if(opcao==1){

        Console.WriteLine("==Converter Kz==");
        Console.Write("Digite o valor em Kuanza: ");
        double opcao01 = double.Parse(Console.Read());

double a = opcao01 / taxaKz;
Console.WriteLine($"{a}USD");



        }else if (oopcao== 2){
            Console.WriteLine("==Converter para dolar==");
            Console.Write(Digite o calor em dolar: );
            double b = double.Parse(Console.ReadLine());

            double b01 = b * taxaKz;

            Console($"{b01}Kz");

        }




        
    }
}