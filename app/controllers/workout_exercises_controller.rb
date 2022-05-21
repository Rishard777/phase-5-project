class WorkoutExercisesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    def index
        render json: WorkoutExercise.all
    end

    def show
        workout_exercise = WorkoutExercise.find(params[:id])
        render json: workout_exercise, status: :ok
    end

    private
    def record_not_found_response
        render json: {error: "Not Found"}, status: :not_found
    end
end
