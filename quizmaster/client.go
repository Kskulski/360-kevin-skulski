package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func getQuestion(text string) {
	resp, err := http.Get("api/getQuestion?qNumber=" + text)
	if err != nil {
		log.Fatalln(err)
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}
	sb := string(body)
	return sb
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter Question Number: ")
	text, _ := reader.ReadString('\n')
	question := getQuestion(text)
	fmt.Print(question)
	text, _ = reader.ReadString('\n')
	//send answer to server for comparison
}
