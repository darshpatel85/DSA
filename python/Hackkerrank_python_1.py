def reverse_words_order_and_swap_cases(s):
    # Write your code here
    word=''
    app=''
    snt=''
    for i in (s):
       if(i!= " "):
            word+=i
       if(i==" "):
            snt=" "+word+snt
            word=''
    snt=word+snt
    for i in snt:
         if(i.isuppwe
    return snt 
            

if __name__ == '__main__':

    sentence = input()

    result = reverse_words_order_and_swap_cases(sentence)
    print(result)
