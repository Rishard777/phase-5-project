class AddDifficultyToExercise < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :difficulty, :integer
  end
end
