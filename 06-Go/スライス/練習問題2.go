package main

import "fmt"

func main() {
	var names []string

	names = append(names, "a")
	names = append(names, "e")
	names = append(names, "r")

	for _, name := range names {
		fmt.Println(name)
	}


}