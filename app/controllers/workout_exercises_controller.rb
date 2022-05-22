class WorkoutExercisesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    def index
        render json: WorkoutExercise.all
    end

    def show
        workout_exercise = WorkoutExercise.find(params[:id])
        render json: workout_exercise, status: :ok
    end

    def create
        we = WorkoutExercise.create!(workout_params)
        render json: we.workout, status: :created

    end

    private

    def workout_params
        params.permit(:workout_id, :user_id)
    end

    def record_not_found_response
        render json: {error: "Not Found"}, status: :not_found
    end
    def unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
