puts "🏕 Seeding users..."
user1 = User.create(firstName: "Rishard", lastName: "Davis", email: "rishard@gmail.com", username: 'Rishard', password: 'password')

puts "🏕 Seeding exercises..."
exercise1 = Exercise.create(name: "Incline Bench Press", category: "Chest", instructions: "Set bench with a slight incline, keep elbows slighty tucked, and lift")
exercise2 = Exercise.create(name: "Standing Incline Cable Fly", category: "Chest", instructions: "Lean forwward slightly and pull cables upward squezing chest muscles at the top the pull")

puts "🏕 Seeding workouts..."
workout1= Workout.create(name: "Chest Day", difficulty: 3)
workout2= Workout.create(name: "Shoulders", difficulty: 3)


puts "🏕 Seeding workout exercises..."
WorkoutExercise.create(workout_id: 1, exercise_id: 1)
WorkoutExercise.create(workout_id: 1, exercise_id: 2)

puts "🏕 Seeding workout plans..."
WorkoutPlan.create(user_id: 1, workout_id: 1, date: "5-23-22")


puts "✅ Done seeding!"