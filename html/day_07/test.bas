Sub subName()
    '// add declarations
    MsgBox "hello world", vbButtonType, "msgTitle"
    

    On Error GoTo catchError
exitSub:
    Exit Sub
catchError:
    '// add error handling
    GoTo exitSub
End Sub