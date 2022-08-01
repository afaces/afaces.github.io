import subprocess

subprocess.run(["bash", "soundCloudSongData.sh"], stderr=subprocess.PIPE, text=True)
htmlLines = []
with open("soundCloudMetadata.txt", "r") as r:
    for line in r:
        if "\"html\":" in line:
            htmlLines.append(line)
bashList = str(subprocess.check_output(["head", "-1", "soundCloudSongData.sh"])).replace('"', '')
bashList = bashList.split('(')[1].split(')')[0].split(' ')

iframeList = []

for line in htmlLines:
    iframeList.append(line.split('"html":')[1].split(',"author_name"')[0].replace('\\', '').replace('height="400"', 'height="300"')[1:-1])

#print(len(iframeList))

with open("soundCloudTracks.md", "w") as o:
    for k in range(len(bashList)):
        o.writelines(iframeList[k]+ "\n")