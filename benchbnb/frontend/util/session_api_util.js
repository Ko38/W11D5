export function signup(user){
  return $.ajax({
    method: "Post",
    url: "/api/users",
    data: { user: { username: user.username, password: user.password } }
  })
}

export function signin(user) {
  return $.ajax({
    method: "Post",
    url: "/api/sessions",
    data: { user: { username: user.username, password: user.password } }
  })
}

export function logout() {
  return $.ajax({
    method: "delete",
    url: "/api/sessions"
  })
}

// window.signin = signin
// window.signup = signup
// window.logout = logout
