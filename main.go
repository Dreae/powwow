package main

import (
    "fmt"
    "log"
    "net/http"
    "github.com/julienschmidt/httprouter"
)

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    fmt.Fprint(w, "Welcome!\n")
}

func main() {
    router := httprouter.New()
    router.GET("/", Index)
    router.ServeFiles("/static/*filepath", http.Dir("static"))

    log.Fatal(http.ListenAndServe(":8080", router))
}