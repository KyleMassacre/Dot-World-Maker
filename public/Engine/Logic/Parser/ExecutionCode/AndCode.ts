﻿/// <reference path="ExecutionCode.ts" />

class AndCode implements ExecutionCode
{
    public Execute(env: CodeEnvironement)
    {
        var a = env.Pop();
        var b = env.Pop();
        env.Push(new VariableValue(a.GetBoolean() && b.GetBoolean()));
        env.CodeLine++;
    }
}