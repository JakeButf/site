---
title: Using GitHub and Unity
description: How I make GitHub work with a team in Unity
---
When working with a team (or even completely solo) picking and working with version control is vital. Picking what version control to use, however, is a whole other issue. Originally, my go-to was [PlasticSCM](https://www.plasticscm.com/) , Unity's built-in solution for version control. Unfortunately, after picking up a project after a year of inactivity, the [PlasticSCM](https://www.plasticscm.com/)  repository was missing as Unity seems to have lost it in their conversion to Unity DevOps. This was, frustrating to say the least, and isn't even the first time this happened (Unity Teams -> [PlasticSCM](https://www.plasticscm.com/) ). So I knew I had to make the switch.

## Why Git?
While using the most popular solution to version control may seem like a no-brainer, git (like other alternatives) isn't without it's cons.

**Pro's:**
- Free Cloud Hosting (through [GitHub](https://github.com/))
- Recognizable/Widely Used 
- Free Private Repositories (through [GitHub](https://github.com/))
- No Member Limit

**Con's:**
- Filesize Limit (we'll talk about this in a bit)
- Permissions Unavailable to Free Accounts (on [GitHub](https://github.com/))
- Unity YAML Merge Conflicts not Handled by Default
- No Built-in out-of-the-box Unity Integration

## Overcoming the Con's

Thankfully in this case, most large hurdles have a fix. Let's go back through and break down each problem and how to solve it.

### Filesize Limits

As of writing this, GitHub currently has a 5GB limit on total repository size, and 50MiB limit on individual files. This is obviously problematic when working on anything but the smallest of Unity projects.

The solution to this is [git lfs](https://git-lfs.com/).

By installing git lfs on your projects repository, you can identify file types in your `.gitattributes` that would be too big for [GitHub](https://github.com/). This will replace these large files with pointers to the actual file that is stored on some server.

To do this, you just need to setup your `.gitattributes` to look something like this:
```
## Unity ##

*.cs diff=csharp text
*.cginc text
*.shader text
*.terrain.asset binary
*.mat merge=unityyamlmerge eol=lf
*.anim merge=unityyamlmerge eol=lf
*.unity merge=unityyamlmerge eol=lf
*.prefab merge=unityyamlmerge eol=lf
*.physicsMaterial2D merge=unityyamlmerge eol=lf
*.physicMaterial merge=unityyamlmerge eol=lf
*.asset merge=unityyamlmerge eol=lf
*.meta merge=unityyamlmerge eol=lf
*.controller merge=unityyamlmerge eol=lf


## git-lfs ##

#Image
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
*.ai filter=lfs diff=lfs merge=lfs -text
*.tif filter=lfs diff=lfs merge=lfs -text

#Audio
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text

#Video
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text

#3D Object
*.FBX filter=lfs diff=lfs merge=lfs -text
*.fbx filter=lfs diff=lfs merge=lfs -text
*.blend filter=lfs diff=lfs merge=lfs -text
*.obj filter=lfs diff=lfs merge=lfs -text

#ETC
*.a filter=lfs diff=lfs merge=lfs -text
*.exr filter=lfs diff=lfs merge=lfs -text
*.tga filter=lfs diff=lfs merge=lfs -text
*.pdf filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
*.dll filter=lfs diff=lfs merge=lfs -text
*.unitypackage filter=lfs diff=lfs merge=lfs -text
*.aif filter=lfs diff=lfs merge=lfs -text
*.ttf filter=lfs diff=lfs merge=lfs -text
*.rns filter=lfs diff=lfs merge=lfs -text
*.reason filter=lfs diff=lfs merge=lfs -text
*.lxo filter=lfs diff=lfs merge=lfs -text
```

This `.gitattributes` file contains the majority of "large files" that are often found in Unity projects.

### Permissions Unavailable to Free Accounts

This is by far the most annoying hurdle of using [GitHub](https://github.com/) and Unity together. Permissions on private repositories currently are only available to premium users ($4 / seat). The solution for this is, well, nothing. As long as you're working with trustworthy people and managing your repository properly (through branching/pull requests etc.), there should never be any big issues with people being able to push directly to your main branch. Hopefully. 

### Unity YAML Merge Conflicts not Handled by Default

This was another one that I could not figure out for the longest time and made me miss using a solution like [PlasticSCM](https://www.plasticscm.com/) (that handled this by default). However, after a bit of digging, I found a way to make git work with Unity YAML files (files such as scenes).

The solution is also incredibly easy.

1. Locate UnityYamlMerge.exe (normally in C:/Program Files/Unityx.x.x/Editor/Data/Tools/)
2. Open your global `.gitconfig` file. (normally in C:/Users/yourname/)
3. Add this to the end of the `.gitconfig` file:
```
[merge]
    tool = unityyamlmerge

[mergetool "unityyamlmerge"]
trustExitCode = false
cmd = '<your path to UnityYAMLMerge.exe>' merge -p "$BASE" "$REMOTE" "$LOCAL" "$MERGED"
```

4. After receiving a merge conflict, run the command `git mergetool --tool=unityyamlmerge`
5. The conflicts should be resolved.

### No Built-in out-of-the-box Unity Integration

One other nice thing about using a solution like [PlasticSCM](https://www.plasticscm.com/) is that it's much easier for non-programmers that work in-engine (like designers) to get a grasp of version control without needing to learn how to use a command line version control like git.

While there's not a real solution to this as far as I'm aware (there likely is some form of plugin on the asset store I've never seen), your best bet is some form of GUI alternative (such as [GitHub Desktop](https://desktop.github.com/download/)).

## Closing Thoughts

After switching my project to git from PlasticSCM/UnityVersionControl/UnityDevOps/whatevertheydecidetocallitnext I can't ever see myself going back. The complete control over your repository in addition to the awesome tools you can integrate through [GitHub](https://github.com/) has made me question why Unity seems to pour so much money into their own solution anyways.