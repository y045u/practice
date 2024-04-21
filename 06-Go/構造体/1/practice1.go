package main

import "fmt"

type Car struct {
	Model string
	Year int
}

func main() {
	car := Car{Model: "プリウス", Year:2024}

	fmt.Println(car.Model)
	fmt.Println(car.Year)
}