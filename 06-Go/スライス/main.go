package main

import (
	"fmt"
)

func main() {
	scores := []int{5}

	scores = append(scores, 10)
	scores = append(scores, 20)
	scores = append(scores, 30)

	for i, score := range scores {
		fmt.Println(i)
		fmt.Println(score)
	}
}