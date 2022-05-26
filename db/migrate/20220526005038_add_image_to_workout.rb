class AddImageToWorkout < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :image, :string
  end
end
