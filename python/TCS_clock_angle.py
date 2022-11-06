t = int(input())
lo = float(input())
time = (t/360)*lo
hur = int(time)
mint = int((time-hur)*60)
mint_ang=mint*6
if(hur==12):
     hur-=12
hur_ang=time*30
ang=abs(hur_ang-mint_ang)
if(ang>180):
     ang=360-ang
print("{:.2f}".format(ang))
