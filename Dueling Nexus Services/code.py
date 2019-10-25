from multiprocessing import Process

N = 100
Sum = 0
def Add():
    global Sum
    for Loop_Count in range(1,N):
        Sum = Sum+1
        if Loop_Count==N-1:
            print(Sum)

if __name__=="__main__":
    Process(target=Add).start()
    print(Sum)

