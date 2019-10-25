import requests
#error = ''' <?xml version='1.0' ?><requestresponse><status><![CDATA[LOGIN]]></status><message><![CDATA[The system could not log you on. Make sure your password is correct]]></message><logoutmessage><![CDATA[You have successfully logged off]]></logoutmessage><state><![CDATA[]]></state></requestresponse>'''
error = "<?xml version='1.0' ?><requestresponse><status><![CDATA[LOGIN]]></status><message><![CDATA[The system could not log you on. Make sure your password is correct]]></message><logoutmessage><![CDATA[You have successfully logged off]]></logoutmessage><state><![CDATA[]]></state></requestresponse>"
success = "<?xml version='1.0' ?><requestresponse><status><![CDATA[LIVE]]></status><message><![CDATA[You have successfully logged in]]></message><logoutmessage><![CDATA[You have successfully logged off]]></logoutmessage><state><![CDATA[]]></state></requestresponse> \n"

def Create_post(uname,password):
    data = {
        "mode" : 191,
        "username" : str(uname),
        "password" : str(password),
        "a" : 1565420997893 + __import__("random").randint(0,19999),
        "producttype" : 0
    }
    r = requests.post('http://172.30.0.1:8090/login.xml', data=data)
    return r.text

def verify(r):
    if r == success :
        return True
    else :
        return False
