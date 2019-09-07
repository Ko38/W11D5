class Api::BenchesController < ApplicationController

  def index 

    #@benches = Bench.all
    @benches = Bench.in_bounds(params[:bounds])
    min = params[:bounds][:minSeat].to_i
    max = params[:bounds][:maxSeat].to_i
    
    if params[:bounds][:minSeat] 
      @benches = @benches.select { |bench| bench.seating >= min }
    end
      
    if params[:bounds][:maxSeat] 
      @benches = @benches.select { |bench| bench.seating <= max }
    end
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
    params.require(:bench).permit(:description, :lat, :lng, :seating, :maxSeat, :minSeat)
  end
end
