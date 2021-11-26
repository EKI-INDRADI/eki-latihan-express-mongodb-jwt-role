// ===================================== JWT MODULE 20211126-0001-ENVIRONTMENT-JWT-TOKEN

let set_token_life = 1
// let calculate_token_life = set_token_life * 60 * 60 //hours
let calculate_token_life = set_token_life * 60  // minutes
let token_life = calculate_token_life //86400 
let now_date = new Date().toISOString()
let token_life_minutes = token_life / 60
let token_life_hours = token_life / 60 / 60
let exp = new Date().setMinutes(new Date().getMinutes() + token_life_minutes)
// let exp = date_exp.setHours(new Date(now_date).getHours() + token_life_hours)
let expired_at = new Date(exp).toISOString()

module.exports = {
  secret: "eki-indradi-secret-key",
  token_life: token_life, // 24 hours
  token_life_hours: token_life_hours,
  token_created_at: now_date,
  token_expired_at: expired_at
};
// ===================================== JWT MODULE 20211126-0001-ENVIRONTMENT-JWT-TOKEN
