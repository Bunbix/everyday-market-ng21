using System;
using System.Text.RegularExpressions;

namespace PatternMatchingAssignment
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Pattern Matching with Regular Expressions");
			Console.WriteLine("=========================================");
			Console.WriteLine();

			bool continueRunning = true;
			string defaultPattern = @"\d+";

			while (continueRunning)
			{
				Console.Write("Enter a regular expression (or press ENTER to use the default): ");
				string? regexPattern = Console.ReadLine();

				if (string.IsNullOrWhiteSpace(regexPattern))
				{
					regexPattern = defaultPattern;
				}

				Console.Write("Enter some input: ");
				string? input = Console.ReadLine() ?? string.Empty;

				try
				{
					bool isMatch = Regex.IsMatch(input, regexPattern);
					Console.WriteLine($"{input} matches {regexPattern}? {isMatch}");
				}
				catch (ArgumentException)
				{
					Console.WriteLine($"Invalid regular expression: {regexPattern}");
				}

								Console.WriteLine("Press ESC to end or any key to try again.");

								if (Console.ReadKey(true).Key == ConsoleKey.Escape)
				{
					continueRunning = false;
				}
				else
				{
					Console.WriteLine(); 
				}
			}
		}
	}
}
