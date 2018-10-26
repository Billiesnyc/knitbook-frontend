class API {
    static init () {
      this.baseUrl = 'http://localhost:3000'
      this.usersUrl = `${this.baseUrl}/users`
      this.patternsUrl = `${this.baseUrl}/patterns`
      this.favouritesUrl = `${this.baseUrl}/favourites`
    }
  
    static getUsers() {
      return fetch(this.usersUrl)
        .then(resp => resp.json())
    }
  
    static getUser (id) {
      return fetch(`${this.usersUrl}/${id}`)
        .then(resp => resp.json())
    }

    static getPatterns() {
      return fetch(this.patternsUrl)
        .then(resp => resp.json())
    }

    static getPattern (id) {
      return fetch(`${this.patternsUrl}/${id}`)
        .then(resp => resp.json())
    }
    
    static updateUserFavorites(userId, patternId) {
      return fetch(this.favouritesUrl, {
          method: 'POST',
          headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json' 
          },
          body: JSON.stringify({
            user_id: userId,
            pattern_id: patternId
          })
      }).then(response => response.json())
  }
  
    // static createQuote (quote, author, likes) {
    //   // 'POST'
    //   return fetch(this.baseUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       'quote': quote,
    //       'author': author,
    //       'likes': likes
    //     })
    //   }).then(resp => resp.json())
    //   .then(renderQuote)
    // }
  
    // static deleteQuote (id) {
    //   return fetch(`${this.baseUrl}/${id}`, {
    //     method: 'DELETE'
    //   })
    // }
  
    // static increaseLikes (id, increasedLike) {
    //   return fetch(`${this.baseUrl}/${id}`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ 'likes': increasedLike })
    //   }).then(resp => resp.json())
    // }
  
    // static editQuote (quote) {
    //   return fetch(`${this.baseUrl}/${quote.id}`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(quote)
    //   }).then(resp => resp.json())
    // }
  }
  
  API.init()