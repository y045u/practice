package main

import "fmt"

type User struct {
	UserName string
}

type Car struct {
	Mainuser User
	Model string
	Year int
}

type Bus struct {
	People int
	Car
}

func (user User) showUser() {
	fmt.Println(user.UserName)
}

func (car Car) display() {
	fmt.Println(car.Mainuser.UserName)
	fmt.Println(car.Model)
	fmt.Println(car.Year)
}

func (bus Bus) display_bus() {
	fmt.Println(bus.People)
}

func main() {
	car := Car{Mainuser:User{UserName:"ada"}, Model: "プリウス", Year:2025}
	bus := Bus{People: 104, Car: Car{Mainuser:User{UserName:"ada"}, Model: "プリウスz", Year:2025}}

	car.display()
	println("0000000000000000000000")
	car.Mainuser.showUser()
	println(111111111111111111)
	bus.display()
	println(111111111111111111)
	bus.Car.display()
	println(111111111111111111)
	bus.Mainuser.showUser()
	fmt.Println(bus.People)

}