class WorkoutPlansController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

def index
    render json: WorkoutPlan.all
end

def show
    wp = WorkoutPlan.find(params[:id])
    render json: wp, status: :ok
end

def create
    wp = WorkoutPlan.create!(workout_params)
    render json: wp.workout, status: :created
end

def destroy
    workout = WorkoutPlan.find(params[:id])
    workout.destroy
end

private

def workout_params
    params.permit(:workout_id, :user_id, :date)
end

def unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
end

end
