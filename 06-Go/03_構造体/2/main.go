package main

import "fmt"

type Car struct {
	Model string
	Year int
}

func (car Car) display() {
	fmt.Println(car.Model)
	fmt.Println(car.Year)
}

func main() {
	car := Car{Model: "プリウス", Year:2025}

	car.display()

}