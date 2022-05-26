puts "🏕 Seeding users..."
user1 = User.create(firstName: "Rishard", lastName: "Davis", email: "rishard@gmail.com", username: 'Rishard', password: 'password')

puts "🏕 Seeding exercises..."
exercise1 = Exercise.create(name: "Incline Bench Press", category: "Chest", difficulty: 3, instructions: "Set bench with a slight incline, keep elbows slighty tucked, and lift")
exercise2 = Exercise.create(name: "Standing Incline Cable Fly", category: "Chest", difficulty: 3, instructions: "Lean forwward slightly and pull cables upward squezing chest muscles at the top the pull")

puts "🏕 Seeding workouts..."
workout1= Workout.create(name: "Chest", image: "https://thumbs.dreamstime.com/b/highlighted-breast-muscle-d-rendered-illustration-30721893.jpg")
workout2= Workout.create(name: "Shoulders", image: "https://thumbs.dreamstime.com/b/highlighted-shoulder-muscle-d-rendered-illustration-30723417.jpg")
workout3= Workout.create(name: "Legs", image: "https://thumbs.dreamstime.com/b/highlighted-gastrocnemius-d-rendered-illustration-human-30723060.jpg")
workout4= Workout.create(name: "Arms", image: "https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg")

puts "🏕 Seeding workout exercises..."
WorkoutExercise.create(workout_id: 1, exercise_id: 1)
WorkoutExercise.create(workout_id: 1, exercise_id: 2)

puts "🏕 Seeding workout plans..."
WorkoutPlan.create(user_id: 1, workout_id: 1, date: "2022-05-23")
WorkoutPlan.create(user_id: 1, workout_id: 2, date: "2022-05-23")


puts "✅ Done seeding!"