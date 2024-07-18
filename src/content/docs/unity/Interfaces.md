---
title: Interfaces
description: Notes on Unity Interface classes.
---
Unity interfaces was a feature I underappreciated for years. Coming from a traditional C# background, I was writing my own way to interface with different types of Unity Monobehaviors. However, once it came time to intermingle this with the Unity inspector, it was nothing but headaches. 

Originally, I was manually running specific commands from a MonoBehavior reference like so:
```
[SerializeField]
public MonoBehaviour InteractScript;
```

Then:
```
interactable.InteractScript.Invoke("Interact", 0);
```

This requires multiple direct references to the MonoBehavior. While this is a *fine* approach for what it was originally for, there is a much better implementation using Interfaces.

For instance, while working with game commands embedded within a string 

i.e. 
```
string s = "this is a message <SetFlag: global, true>
```

it quickly became a pain to deal with multiple edge cases.

The solution to this was an Interface like so:

```
public interface ITextCommand
{
   void Execute();
}
```
Then creating multiple classes containing the implementation for each form of command:
```
public class SetFlagCommand : ITextCommand
{
    private string flagName;
    private bool value;
    private GameMaster GM;

    public SetFlagCommand(string flagName, bool value)
    {
        this.flagName = flagName;
        this.value = value;
        this.GM = MasterCache._GameMaster;
    }

    public void Execute()
    {
        GM.SetGlobalFlag(flagName, value);
    }
}
```

This is a much cleaner way to handle inheritance.

Additionally the Interface class can contain other useful data-types that need to be re-used. Such as enums, static references, and generalized variables.