class CreateWorkoutPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_plans do |t|
      t.date :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
