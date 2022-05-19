puts "🏕 Seeding users..."
user1 = User.create(firstName: "Rishard", lastName: "Davis", email: "rishard@gmail.com", username: 'Rishard', password: 'password')

puts "🏕 Seeding exercises..."
exercise1 = Exercise.create(name: "Incline Bench Press", category: "Chest", instructions: "Set bench with a slight incline, keep elbows slighty tucked, and lift")
exercise2 = Exercise.create(name: "Standing Incline Cable Fly", category: "Chest", instructions: "Lean forwward slightly and pull cables upward squezing chest muscles at the top the pull")

puts "🏕 Seeding workouts..."
workout1 = Workout.create(name: "Chest Day",)

puts "✅ Done seeding!"