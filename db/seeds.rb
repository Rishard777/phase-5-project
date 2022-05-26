puts "🏕 Seeding users..."
user1 = User.create(firstName: "Rishard", lastName: "Davis", email: "rishard@gmail.com", username: 'Rishard', password: 'password')

puts "🏕 Seeding exercises..."
exercise1 = Exercise.create(name: "Incline Bench Press", category: "Chest", difficulty: 3, instructions: "Set bench with a slight incline, keep elbows slighty tucked, and lift")
exercise2 = Exercise.create(name: "Standing Incline Cable Fly", category: "Chest", difficulty: 1, instructions: "Lean forwward slightly and pull cables upward squezing chest muscles at the top the pull")
exercise3 = Exercise.create(name: "Dips" ,  category: "Chest", difficulty: 3, instructions: "Go down and up really slow and controlled with a slight lean forward")
exercise4 = Exercise.create(name: "Over head rope pulls" , category: "Arms", difficulty: 2, instructions: "Lean forward with rope over your head and extend arms forward")
exercise5 = Exercise.create(name: "Tricep pull downs" , category: "Arms" , difficulty: 2, instructions: "Pull rope down and apart while being slightly leaned forward")
exercise6 = Exercise.create(name: "Single arm overhead tricep extensions" , category: "Arms" , difficulty: 3, instructions: "Hold dumbell over your head with elbow towards the ceiling and move arm up and down")
exercise7 = Exercise.create(name: "Hammer curl" , category: "Arms", difficulty: 1, instructions: "Curl dumbell toawrds chest")
exercise8 = Exercise.create(name: "Bicep curl with forearm twist" , category: "Arms" , difficulty: 3, instructions: "Curl dumbell up and twist arm at the top of rep and bring down")
exercise9 = Exercise.create(name: "Pull ups" , category: "Back" , difficulty: 3, instructions: "Squeeze back muscles together and pull up")
exercise10 = Exercise.create(name: "Lat pull down" , category: "Back" , difficulty: 2, instructions: "Grab the bar as wide as you can and go up and down slow and controlled")
exercise11 = Exercise.create(name: "Shouler Press" , category: "Shoulers" , difficulty: 3, instructions: "Lift heavy dumbell over head slow and controlled with arms slightly tucked in")
exercise12 = Exercise.create(name: "Lateral Raises" , category: "Shoulers" , difficulty: 2, instructions: "Lift dumbells out to the side of you while standing straight up and core tight")
exercise13 = Exercise.create(name: "Leg Extension" , category: "Legs" , difficulty: 2, instructions: "Extend legs slow and controlled on leg extension machine")
exercise14 = Exercise.create(name: "Hamstring Curl" , category: "Legs" , difficulty: 2, instructions: "Curl legs slow and controlled on hamstring curl machine")
exercise15 = Exercise.create(name: "Calf Raises" , category: "Legs" , difficulty: 2, instructions: "Go up and down on your tippy toes slow and controlled with weights in hand")


puts "🏕 Seeding workouts..."
workout1= Workout.create(name: "Chest", image: "https://thumbs.dreamstime.com/b/highlighted-breast-muscle-d-rendered-illustration-30721893.jpg")
workout2= Workout.create(name: "Shoulders", image: "https://thumbs.dreamstime.com/b/highlighted-shoulder-muscle-d-rendered-illustration-30723417.jpg")
workout3= Workout.create(name: "Legs", image: "https://thumbs.dreamstime.com/b/highlighted-gastrocnemius-d-rendered-illustration-human-30723060.jpg")
workout4= Workout.create(name: "Arms", image: "https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg")
workout5= Workout.create(name: "Back", image: "https://thumbs.dreamstime.com/b/highlighted-latissimus-d-rendered-illustration-30721633.jpg")

puts "🏕 Seeding workout exercises..."
WorkoutExercise.create(workout_id: 1, exercise_id: 1)
WorkoutExercise.create(workout_id: 1, exercise_id: 2)
WorkoutExercise.create(workout_id: 1, exercise_id: 3)

WorkoutExercise.create(workout_id: 2, exercise_id: 11)
WorkoutExercise.create(workout_id: 2, exercise_id: 12)

WorkoutExercise.create(workout_id: 3, exercise_id: 13)
WorkoutExercise.create(workout_id: 3, exercise_id: 14)

WorkoutExercise.create(workout_id: 4, exercise_id: 4)
WorkoutExercise.create(workout_id: 4, exercise_id: 5)
WorkoutExercise.create(workout_id: 4, exercise_id: 6)
WorkoutExercise.create(workout_id: 4, exercise_id: 7)
WorkoutExercise.create(workout_id: 4, exercise_id: 8)


WorkoutExercise.create(workout_id: 5, exercise_id: 9)
WorkoutExercise.create(workout_id: 5, exercise_id: 10)

puts "🏕 Seeding workout plans..."
WorkoutPlan.create(user_id: 1, workout_id: 1, date: "2022-05-23")
WorkoutPlan.create(user_id: 1, workout_id: 2, date: "2022-05-23")


puts "✅ Done seeding!"