library(shiny)
ui <- fluidPage(
  h1("Universal Gas Law graph generator"),
  selectInput("graphtype",label="Choose Grapf behavior",choices = c("Isothermal","Isotonic","Isobaric")),
  selectInput("type", label="Choose graph type",choices = c("PV Graph","NT Graph")),
  conditionalPanel(condition = "input.type=='PV Graph'",
  numericInput("pressure","Input P: ",value = 100),
  numericInput("volume","Input V: ",value = 100)),
  conditionalPanel(condition = "input.type=='NT Graph'",
  numericInput("temperature","Input T: ",value = 253),
  numericInput("number","Input N: ",value = 100)),
  mainPanel(plotOutput("outPlot"))
  
)

server <- function(input, output, session) {
  reactive(values <- reactiveValues(p = input$pressure, v = input$volume, t=input$temperature,n=input$number))
  eq <- function(x){
   x*2 
  }
  output$outPlot = renderPlot(curve(eq,from=1,to=100,xlab="x",ylab="y",type='l'))
}

shinyApp(ui, server)