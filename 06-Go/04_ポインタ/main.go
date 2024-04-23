package main

import (
	"fmt"
)

type Account struct {
	Owner string
	Balance int
}

func (account *Account) Diposit(amount int) {
	account.Balance += amount
}

func (account *Account) Withdraw(amount int) {
	account.Balance -= amount
}

func main() {
	account := Account{Owner: "aiueo", Balance: 1500000}
	fmt.Println(account)

	account.Diposit(500)
	fmt.Println(account)

	account.Withdraw(500)
	fmt.Println(account)
}