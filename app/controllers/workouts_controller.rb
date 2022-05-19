class WorkoutsController < ApplicationController
    def index
        render json: Workout.all
    end
end
