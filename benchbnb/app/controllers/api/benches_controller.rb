class Api::BenchesController < ApplicationController

  def index 

    #@benches = Bench.all
    @benches = Bench.in_bounds(params[:bounds])
    
    render :index
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save 
      render :show
    else
      render json: ["Not working"], status: 404
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
