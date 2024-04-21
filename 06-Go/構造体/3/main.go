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

func (user User) showUser() {
	fmt.Println(user.UserName)
}

func (car Car) display() {
	fmt.Println(car.Mainuser.UserName)
	fmt.Println(car.Model)
	fmt.Println(car.Year)
}

func main() {
	car := Car{Mainuser:User{UserName:"ada"}, Model: "プリウス", Year:2025}

	car.display()
	car.Mainuser.showUser()

}