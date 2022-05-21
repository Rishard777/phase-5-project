class WorkoutsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response 
    def index
        render json: Workout.all
    end

    def show
        workout = Workout.find(params[:id])
        render json: workout, serializer: WorkoutWithExercisesSerializer
    end

    private
    def record_not_found_response
        render json: {error: "NotFound"}, status: :not_found
    end
   
end
